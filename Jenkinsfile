pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out project from GitHub...'
                checkout scm
            }
        }

        stage('Install') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t nova-cafe .'
            }
        }

        stage('Docker Run') {
            steps {
                echo 'Starting Docker container...'

                bat '''
                docker rm -f nova-cafe-container 2>nul
                docker run -d --name nova-cafe-container -p 8082:8081 nova-cafe
                '''

                echo 'Docker container started successfully!'
            }
        }
    }

    post {
        success {
            echo '=========================================='
            echo ' JENKINS + DOCKER PIPELINE SUCCESSFUL!'
            echo ' Application: http://localhost:8082'
            echo '=========================================='
        }

        failure {
            echo '=========================================='
            echo ' PIPELINE FAILED!'
            echo '=========================================='
        }
    }
}