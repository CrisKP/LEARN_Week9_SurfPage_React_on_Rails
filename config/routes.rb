Rails.application.routes.draw do
  root 'surfs#intro'

  get 'surfs/beginner'

  get 'surfs/intermediate'

  get 'surfs/advanced'

  get 'surfs/random_stuff'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
