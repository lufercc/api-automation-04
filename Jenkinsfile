pipeline {
 agent any
 stages {
    stage("build") {
         steps {
             bat 'echo build -------'
         }
    }
     stage("test") {
         steps {
             bat 'echo test ------'
         }
    }
    stage("test1") {
         steps {
             bat 'docker build -t automation:1.0.0 .'
         }
    }
    stage("testAnghela") {
         steps {
             bat 'docker-compose up'
         }
     }
 }
}
