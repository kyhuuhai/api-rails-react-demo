class Api::V1::PostsController < Api::V1::BaseController
    # before_action :auth_member

    def index
      render json: {posts: Post.search(params[:search]).limit(20)}
    end

    def show
      render json: {post: Post.find_by_id(params[:id])}
    end

    def create
      post = Post.create post_params

      render json: {post: post}
    end

    def destroy
      Post.destroy(params[:id])

      render json: {id: params[:id]}
    end

    def update
      post = Post.find(params["id"])
      post.update_attributes(post_params)
      render json: {post: post}
    end

    private

    def post_params
      params.require(:post).permit(:id, :name, :description)
    end
end
