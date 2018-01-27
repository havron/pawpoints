class WelcomeController < ApplicationController
  def index
  end

	def show
		@signed_in = Users.find(params[:id])
	end
end
