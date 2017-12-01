require 'test_helper'

class SurfsControllerTest < ActionDispatch::IntegrationTest
  test "should get intro" do
    get surfs_intro_url
    assert_response :success
  end

  test "should get beginner" do
    get surfs_beginner_url
    assert_response :success
  end

  test "should get intermediate" do
    get surfs_intermediate_url
    assert_response :success
  end

  test "should get advanced" do
    get surfs_advanced_url
    assert_response :success
  end

end
