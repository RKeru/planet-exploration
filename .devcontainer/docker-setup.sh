rm -rf /root/.ssh
cp -av /tmp/.ssh /root/.ssh
chmod 700 /root/.ssh
# chmod 644 /root/.ssh/config
find /root/.ssh -name "id_rsa*" -not -name *.pub -exec chmod 600 {} \;
find /root/.ssh -name "id_rsa*" -name *.pub -exec chmod 644 {} \;