Rails.application.routes.draw do
  resources :products
  resources :users
  resources :reviews
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "sessions#create"

  get "/me",to: "users#show"

  delete "/users", to: "users#destroy"
end
