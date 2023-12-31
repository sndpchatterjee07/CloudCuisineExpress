# CloudCuisineExpress

`CloudCuisineExpress` is a full-stack web application that empowers cloud kitchens to streamline their operations, manage menus, process orders, and enhance the customer experience. Built with the MERN stack, this project offers a comprehensive solution for modern food delivery businesses.

## MERN Project Structure

  ![Screenshot from 2023-09-30 02-31-48](https://github.com/sndpchatterjee07/CloudCuisineExpress/assets/3818950/7dfd75f6-2ada-4af6-8fb2-78a9384c86a1)

## MongoDB Database

  ![Screenshot from 2023-09-30 02-33-42](https://github.com/sndpchatterjee07/CloudCuisineExpress/assets/3818950/e3dbdba2-5030-4812-a20b-98559eb3ee78)




## Features

- **Menu Management**: Create, update, and manage menu items with ease, including descriptions, prices, and images, all from an intuitive admin dashboard.

- **Order Processing**: Efficiently handle incoming orders, track their status, and manage order preparation and delivery.

- **Customer Experience**: Provide a user-friendly interface for customers to browse menus, place orders, and track deliveries in real-time.

- **Inventory Management**: Keep track of kitchen inventory, including ingredient quantities and expiration dates, to optimize menu availability.

- **User Roles**: Define user roles such as kitchen staff, admin, and delivery personnel with varying levels of access and permissions.

- **Real-time Notifications**: Send order updates and notifications to both customers and kitchen staff for a seamless order fulfillment process.

- **Analytics and Reporting**: Access valuable insights into your kitchen's performance and order history.

## Technologies Used

- MongoDB `6.0.10`
- `Express.js 4.16.1`
- React
- Node.js `20.7.0`


## Deploying the project to Apache Server

1. Clone this repository `git clone https://github.com/sndpchatterjee07/CloudCuisineExpress.git`.
2. Navigate to the project's `client` directory.
3. Build the project `npm run build`
4. Rename the directory `build` to `cloudcuisineexpress`(or anything of your choice).
5. Copy the directory to `/var/www/html/` as root - `cp -rf /home/sandeep/Desktop/cloudcuisineexpress/ /var/www/html/`
6. Go to the `/etc/apache2/sites-available/` directory and open the `000-default.conf` file.
7. Change the `DocumentRoot` path to `/var/www/html/cloudcuisineexpress`
8. Go to `/etc/apache2` and open `apache2.conf` and add the following snippet

   ```
   <Directory /var/www/html>
       Options Indexes FollowSymLinks
       AllowOverride All
       Require all granted
   </Directory>
   ```

9. Restart the Apache server

   `sudo service apache2 restart`

10. Access the application in your web browser at `http://127.0.0.1/`.  



## Contributing

Please make sure your contributions adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This repository is licensed under the [Apache License 2.0](LICENSE.md), which means you may reproduce and distribute copies of the work or derivative works thereof in any medium, with or without modifications, and in source or object form, provided that you meet the conditions mentioned on the license.

## Acknowledgments

Special thanks to the open-source community and all contributors who helped make `CloudCuisineExpress` possible.
