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
	stage('Install Ansible Collections') {
            steps {
                sh '''
                ansible-galaxy collection install -r requirements.yml
                '''
            }
        }
        stage('Run Ansible') {
            steps {
                sh '''
                pwd
		ls -l
                ansible-playbook -i inventory/hosts.ini playbooks/site.yml
                '''
            }
        }
    }
}
