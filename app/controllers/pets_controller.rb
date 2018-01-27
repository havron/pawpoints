class PetsController < BaseController
  def index

  end

  def create
    respond_with :api, :v1, Pet.create(pet_params)
  end

  def destroy
    respond_with Pet.destroy(params[:id])
  end

  def update
    pet = Pet.find(params["id"])
    pet.update_attributes(pet_params)
    respond_with pet, json: pet
  end 

  private

  def pet_params
    params.require(:pet).permit(:id, :name, :description)
  end
end
