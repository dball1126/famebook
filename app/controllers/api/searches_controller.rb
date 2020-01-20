class Api::SearchesController < ApplicationController
    
    def user_search
        query = params[:query][:query]
        
        string = "LOWER(username) LIKE '%#{query.downcase}%'"
        if (query.length > 0)
            @users = User.where(string)
        else
            @users = User.all
        end
        render 'api/users/index'
    end
end