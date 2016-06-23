#!/bin/bash

#!/bin/bash
for NAME in "RE" "bank" "hostel" "hotel" "restaurant"
do
  echo "DROP DATABASE ${NAME};" | mysql
done