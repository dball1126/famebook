Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do

    resources :users, only: [:new, :create, :show, :index] do
        resources :posts, only: [:new, :create, :show, :index ]
    end

    resources :posts, only: [:delete]
    resource :session, only: [:new, :create, :destroy]

    post 'users/search', to: 'searches#user_search'

  end
end