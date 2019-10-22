class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 8}, allow_nil: true

    def is_password?(password)
        new_password = BCrypt::Password.new(self.password_digest)
        new_password.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom.url_safe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
end