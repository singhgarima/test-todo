# README

## Setup project on laptop/pc

### System

* Install ruby on your laptop/pc.
  * [https://www.ruby-lang.org/en/installation/]()
  * [https://www.ruby-lang.org/en/documentation/quickstart/]()
* Install bundler
  ```
  gem install bundler
  ```
  Note:
    * gem - RubyGems is a sophisticated package manager for the Ruby
      programming language.
    * bundler - Bundler provides a consistent environment for Ruby projects by
      tracking and installing the exact gems and versions that are needed.
      ( More here [http://bundler.io/]())
* Install Postgres

### Project

* From project directory
  ```
    bundle install
    rake db:create
    rake db:migrate
    rails s 
  ```
  NOTE:
  * bundle installs gem
  * rake db:create and rake db:migrate sets up the database
  * rails s to run the application
  * open browser with url - localhost:3000