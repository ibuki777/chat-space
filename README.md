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
|user_name|string|null: false, index: true|
|email|integer|null: false|
|password|integer|null: false|

## Association
- has_many :group
- has_many :message

## message table

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string| |
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|foreign_key: true|

## Association
- belongs_to :user
- belongs_to :group

## group table

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|use_id|integer|null: false|

## Association
- has_many :users
- has_many :message


|
* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
 