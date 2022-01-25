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
             bat 'npm install'
         }
    }
    stage("testAnghela") {
         steps {
             bat 'npm run test'
         }
     }
 }
}
