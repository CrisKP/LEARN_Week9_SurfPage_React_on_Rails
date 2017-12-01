class SurfsController < ApplicationController
  def intro
    render react_component: 'Intro'
  end

  def beginner
  end

  def intermediate
  end

  def advanced
  end
end
