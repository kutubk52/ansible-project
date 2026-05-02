pipeline {
    agent any
    
    parameters {
        string(name: 'BRANCH', defaultValue: 'main')
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: "${params.BRANCH}",
                    url: 'https://github.com/kutubk52/ansible-project.git'
            }
        }

        stage('Run Ansible') {
            steps {
                sh '''
                cd ansible-project
                ansible-playbook -i inventory/hosts.ini playbooks/site.yml
                '''
            }
        }
    }
}
