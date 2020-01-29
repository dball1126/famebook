@posts.each do |post|
    # json.posts def 
        json.set! post.id do 
            json.partial! '/api/posts/post', post: post
            
            if (post.image.attached?)
                json.image url_for(post.image)
                json.image_attached true
            else 
                json.image_attached false
            end
            
        end
    # end
end