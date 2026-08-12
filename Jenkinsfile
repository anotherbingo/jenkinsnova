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
    }


    post {

        success {

            echo '================================'
            echo ' NOVA CAFE PIPELINE SUCCESSFUL!'
            echo '================================'
        }

        failure {

            echo '================================'
            echo ' NOVA CAFE PIPELINE FAILED!'
            echo '================================'
        }
    }
}
