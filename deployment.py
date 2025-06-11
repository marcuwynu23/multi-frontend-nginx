
from pydaffodil import Daffodil

cli = Daffodil(remote_user="root", remote_host="147.93.62.212")

steps = [
    {"step": "make project folder", "command": lambda: cli.ssh_command("mkdir -p /var/www/test")},
    {"step": "make project folder", "command": lambda: cli.ssh_command("mkdir -p /var/www/test/app1")},
    {"step": "Transfer files to remote server", "command": lambda: cli.transfer_files("app1/dist",destination_path="/var/www/test/app1")},
    {"step": "make project folder", "command": lambda: cli.ssh_command("mkdir -p /var/www/test/app2")},
    {"step": "Transfer files to remote server", "command": lambda: cli.transfer_files("app1/dist",destination_path="/var/www/test/app2")},
    {"step": "make project folder", "command": lambda: cli.ssh_command("mkdir -p /var/www/test/app3")},
    {"step": "Transfer files to remote server", "command": lambda: cli.transfer_files("app1/dist",destination_path="/var/www/test/app3")},
    {"step": "Change permission", "command": lambda: cli.ssh_command("chmod -R 755 /var/www/wesc")},
    {"step": "Transfer nginx configuration", "command": lambda: cli.transfer_files("deployment/nginx", destination_path="/etc/nginx/sites-available")},
    {"step": "Create symlink for nginx configuration", "command": lambda: cli.ssh_command("ln -s /etc/nginx/sites-available/wesc.cloudmateria.com /etc/nginx/sites-enabled/")},
    {"step": "Transfer certbot configuration", "command": lambda: cli.transfer_files("deployment/certbot", destination_path="/root/certbot")},
    {"step": "renew Certbot", "command": lambda: cli.ssh_command("certbot --config /root/certbot/certbot.ini --nginx --cert-name certificate")},
    {"step": "Reload Nginx", "command": lambda: cli.ssh_command("systemctl reload nginx")},
]

cli.deploy(steps)