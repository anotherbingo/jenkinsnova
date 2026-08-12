pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {

                echo 'Checking out code from GitHub...'

                checkout scm
            }
        }


        stage('Install') {

            steps {

                echo 'Installing project...'

                bat 'npm install'
            }
        }


        stage('Build') {

            steps {

                echo 'Building Nova Cafe website...'

                bat 'npm run build'
            }
        }


        stage('Test') {

            steps {

                echo 'Running tests...'

                bat 'npm test'
            }
        }


        stage('Deploy') {

            steps {

                echo 'Starting Nova Cafe website...'

                bat 'start "" /B node server.js > server.log 2>&1'

                echo 'Website deployed successfully!'
                echo 'Open http://localhost:8081'
            }
        }
    }


    post {

        success {

            echo '======================================'
            echo ' NOVA CAFE CI/CD PIPELINE SUCCESSFUL!'
            echo ' Website: http://localhost:8081'
            echo '======================================'
        }

        failure {

            echo '======================================'
            echo ' PIPELINE FAILED!'
            echo '======================================'
        }
    }
}
