class CreateQuestionAnswers < ActiveRecord::Migration
  def change
    create_table :question_answers do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false

      t.timestamps null: false
    end
    add_index :question_answers, :user_id
  end
end
