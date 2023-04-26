export $(grep -v '^#' ../.env | xargs)

files=`find "$(pwd)/" -name "*.png"`
totalCount=`find "$(pwd)" -name "*.png" | wc -l`
index=0

for file in $files
do
  id=`echo $file | sed -e 's/.*\///' -e 's/\..*//'`

  echo "Uploading file $id..."

  curl \
    --request POST https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_CDN_ACCOUNT_ID/images/v1 \
    --show-error \
    --silent \
    --output /dev/null \
    --fail \
    --header "Authorization: Bearer ${CLOUDFLARE_CDN_ACCESS_TOKEN}" \
    --form "file=@${file}" \
    --form "id=${id}"
  ((index++))

  echo -e "Progress $((100 * $index / $totalCount))%"
done

