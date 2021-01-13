class RatingVotePolicy < ApplicationPolicy
  def create?
    !user_is_suspended?
  end

  def permitted_attributes
    %i[rating group article_id]
  end
end
