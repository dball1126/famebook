# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_posts_on_author_id  (author_id) UNIQUE
#

class Post < ApplicationRecord
    validates :author_id, presence: true
    
    #Associations
    belongs_to :user,
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :User

end
