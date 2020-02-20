# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

## Association
- has_many :groups,through: :group_users
- has_many :messages
- has_many :groups_users

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text| |
|image|string| |
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false,foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

## Association
- has_many :user,through: :group_users
- has_many :messagess
- has_many :groups_users

## groups_users table

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false,foreign_key: true|
|group_id|references|null: false,foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
 