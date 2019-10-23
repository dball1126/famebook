class Api::PostsController < ApplicationController
    def new
        @post = Post.new
    end

    def show
        @post
    end

    def index
        @posts = Post.all
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render "api/posts"
        else 
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update_attributes(post_params)
            render json: show 
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def edit 
        @post = Post.find(params[:id])
    end

    

    def post_params
        params.require(:post).permit(:author_id)
    end
end