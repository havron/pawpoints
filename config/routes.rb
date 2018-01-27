Rails.application.routes.draw do
  get 'welcome/index'
    
  root 'welcome#index'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :pets#, only: [:index, :create, :destroy, :update]
end
