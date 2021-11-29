# BaronRepo
# Front-End Repo for our HAAS project.
This application is intended to allow a team to keep up with projects that make use of certain hardware sets while tracking inventory and current usage. It also allows certain datasets to be read from and downloaded.
To begin, sign in or register an account on the login page.
Hardware sets will be shown to everyone, but projects can only be seen by their creators, and by the people that have been explicitly added to a project. This can be done on a project in the 'Open' modal.
Users may also add themselves to a project if they are given the projectID on the projects tab.
User information is encrypted, so your login data is safe on our database cluster.
Using the 'Open' modal, users can check in or check out units of hardware sets to a project, which will be reflected on the project itself, as well as the hardware set's availability.
Projects also have an associated 'funds' tracker, which will be decremented per HWset that is checked out.
On the hardware sets tab, a summarization of all HWset availability is displayed.
On the datasets tab, a few items from a data API are displayed, with a downloadable link that contains zipped informaton about the items.
