class Api::V1::ItemsController < Api::V1::BaseController
    # before_action :auth_member

    def index
      render json: {items: Item.search(params[:search])}
    end

    def create
      item = Item.create item_params

      render json: {item: item}
    end

    def destroy
      Item.destroy(params[:id])

      render json: {id: params[:id]}
    end

    def update
      item = Item.find(params["id"])
      item.update_attributes(item_params)
      render json: {item: item}
    end

    private

    def item_params
      params.require(:item).permit(:id, :name, :description)
    end
end
