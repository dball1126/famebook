@posts.each do |post|
    # json.posts def 
        json.set! post.id do 
            json.partial! '/api/posts/post', post: post
            
            if (post.image.attached?)
                json.image url_for(post.image)
            end
        end
    # end
end