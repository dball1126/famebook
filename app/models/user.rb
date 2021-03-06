# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  password_digest :string           not null
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#

class User < ApplicationRecord
    validates :email, :password_digest, :birthday, :gender, presence: true

    validates :first_name, presence: {message: "fname"}
    validates :last_name, presence: {message: "lname"}
    validates :birthday, presence: {message: "bday"}
    validates :gender, presence: {message: "gend"}
    validates :email, presence: {message: "newemail"}
    validates :session_token, :password_digest, presence: true, uniqueness: true
    validates :password, length: {minimum: 8, allow_nil: true, message: "newpass"}

    attr_reader :password
    
    after_initialize :ensure_session_token

    has_one_attached :image
    
    has_many :posts,
        primary_key: :id, 
        foreign_key: :author_id,
        class_name: :Post

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        else
            return nil
        end
    end

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
        SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end
end