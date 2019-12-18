Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: 'json'} do
    
    resources :users, only: [:new, :create, :show] do
      resources :posts, only: [:new, :create, :show ]
    end

    resources :posts, only: [:delete]
    resource :session, only: [:new, :create, :destroy]
  end
end
