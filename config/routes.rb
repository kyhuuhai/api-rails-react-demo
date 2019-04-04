Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]

      post "login", to: "users#login"
    end
  end


  root to: 'sites#index'
  resources :sites
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
