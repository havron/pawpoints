Rails.application.routes.draw do
  resources :pets#, only: [:index, :create, :destroy, :update]
end
