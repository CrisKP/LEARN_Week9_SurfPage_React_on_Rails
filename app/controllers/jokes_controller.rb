class JokesController < ApplicationController
  def index
    render react_component: 'Joke'
  end
end
