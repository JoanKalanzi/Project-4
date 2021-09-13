# Project-4
<h1>Overview</h1>
<p>PLANTMOM is a social media platform app where  plant moms  photo share pictures of their plants and can comment on each other's posts.</p>


![homepage](https://github.com/JoanKalanzi/Project-4/blob/main/plant-django-app/client/src/assets/Screenshot%202021-09-13%20at%2014.13.17.png?raw=true)

<h1>Deployed app:</h1>
<h2>Code Installation:</h2>
<li> Install back-end dependencies: pipenv.</li>
<li>Enter Shell for project: pipenv shell.</li>
<li> Make Migrations: python manage.py makemigrations.
</li>
<li>Migrate: python manage.py migrate.</li>
<li>Load Seed data for Plant Pictures: python manage.py loaddata..plant_pictures/seeds.json.</li>
<li>Load Seed data for Plant_family: python manage.py .loaddata.plant_family/seeds.json.</li>
<li>Start back-end server: python manage.py runserver.</li>
<li>Change into the front-end directory: cd frontend.</li>
<li>Install front-end dependencies: yarn.</li>
<li>Start front-end server: yarn start.</li>

<h1>The Brief</h1>
<li>Build a full-stack application by making your own backend and your own front-end.</li>
<li>Use a Python Django API using Django REST Framework to serve your data from a Postgres database.</li>
<li>Consume your API with a separate front-end built with React.</li>
<li>Be a complete product which most likely means multiple relationships.functionality for at least three models.</li>
<li>Implement thoughtful user wireframes that are significant enough to help you know which features are core MVP and which you can cut.</li>
<li>Be deployed online so it's publicly accessible.</li>


<h1>Technologies Used</h1>
<h2>Backend:</h2>
<li> Python</li>
<li>Django</li>
<li>pyJWT</li>
<li>TablePlus</li>

<h1>Frontend:</h1>
<li>React</li>
<li>Axios</li>
<li>React bootstrap</li>
<li>Bulma</li>
<li>SASS</li>
<li>React Router Dom</li>

<h1>Development tools:</h1>
<li>VS code</li>
<li>Yarn</li>
<li>Insomnia</li>
<li>Git</li>
<li>GitHub</li>
<li>Google Chrome dev tools</li>
<li> Heroku (deployment)</li>
<li> Figma/ FigJam (wireframing)</li>
<li> Asana( planning and timeline)</li>
<li> Zoom</li>
<li> Slack</li>

<h1>Approach</h1>
<h2>Process/ planning</h2>
<p>As this was a solo project, I decided very quickly that I wanted to build an app that I would enjoy using in the future and can continue to build post projects.The idea for PLANTMOM came from my love of plants and the joy that comes from seeing them grow.  With that in mind I decided a social media app with the focus of sharing plant pictures would be great.  When approaching the planning stage, Figma was used to create used wireframes for the frontend.
For the frontend , I decided to go with a simple four page layout, the user will first land on the login page , with a signup link to register if needed , followed by a plant picture feed page and finally a profile page.

</p>
<h2>Figma:PLANTMOM</h2>

![Figma design](https://github.com/JoanKalanzi/Project-4/blob/main/plant-django-app/client/src/assets/Screenshot%202021-09-13%20at%2013.35.15.png?raw=true)


<h2>Relationships</h2>
<p>Understanding the relationships between the different models was key for the success of the project. With the use of figjam, I was able to map out the models I was going to implement in the project and draw out the relationships linking them together with the star representing many to many relationships and the heart representing a one to many relationship.</p>

<h2>Figjam: Models and Relationships</h2>

![Relationship](https://github.com/JoanKalanzi/Project-4/blob/main/plant-django-app/client/src/assets/Screenshot%202021-09-13%20at%2013.36.54.png?raw=true)




<h3>Asana planning:</h3>
<p>As this was a solo project, keeping on track everyday on what I was doing was very important to achieving MVP. For this reason, I used Asana to list out of the tasks I needed to achieve and assign them a deadline. I found this very helpful, as this allowed me to become more focused and  accountable for my process.<p/>

![Asana planning](https://github.com/JoanKalanzi/Project-4/blob/main/plant-django-app/client/src/assets/Screenshot%202021-09-13%20at%2014.56.34.png?raw=true)

<h3>Backend:</h3>
<p>As this was my first time creating a build back-end using Python. I started the development process by building out the above models with views , urls and serializers in Django REST Framework to create a SQL database with RESTful features. To make sure that everything was working as they should, I spent four days building out the models , using TablePuls to visualise my PostgreSql database ,and  Insomnia REST Client to test the backend requests ensuring all relationships between models were working and returned the expected JSON responses.</p>

<h4>Featured piece of code </h4>
<h5>The Picture model </h5>
<pre>
from jwt_auth.models import User
from django.db import models
 
 
class Picture(models.Model):
   title = models.CharField(max_length=50, default=None)
   image = models.CharField(max_length=500, default=None)
   family = models.ManyToManyField(
     'plant_family.Family', related_name="pictures"
   )
   owner = models.ForeignKey(
       "jwt_auth.User",
       related_name="pictures",
       on_delete= models.CASCADE
   )
 
 
 
   def __str__(self):
       return f"{self.title} "


</pre>

<p>After I was happy with the models, I proceeded to work on the serializers ensuring that I populated my pictures with data from different models with different sql relationships such as One- to- Many(comments) and Many - to- Many (family).</p>

<pre >
from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import PictureSerializer
from plant_family.serializers.common import FamilySerializer
from jwt_auth.serializer import UserSerializer
 
 
class PopulatedPictureSerializer(PictureSerializer):
 
   comments = PopulatedCommentSerializer(many=True)
   family= FamilySerializer(many=True)
   owner = UserSerializer()


</pre>

<h2>TablePlus:PLANTMOM PostgreSql database</h2>

<h2>Frontend </h2>
<p>Once I was happy with the Backend , I started working on the Frontend which was  built using React Hooks. I started off creating the different components that hosted the Home  page, Navbar, Register page , Login form , PlantPicture page and Comments. I used Axios  for the data request from the back- end which created an api request library that was imported into the relevant pages. I used react-router- dom for page navigation.  A combination of React-BootStrap, Bulma and SASS  was used as a styling framework throughout the project. By this stage unfortunately, I found myself in major errors taking up to two days to solve even with the help of the instructional team. Having  lost two days of work, I had to regroup and evaluate my MVP. In the end I decided to invest the time I had remaining into tying up loose ends , rather than trying to build new UI’s for the functionality I had built in the backend.</p>

<h2>Screen shots: Of the app</h2>

<h3>Wins </h3>
<p>I am very pleased with the backend. At the beginning of this project, I wanted to build my backend knowledge as I believed this would enable me to become a  well rounded Full-Stack Developer which I achieved on this solo project. My understanding of relationships improved dramatically compared to project three. </p>

<h3>Challenges</h3>
<p>As this was my first project using Python Django  in the backend , I spent a lot of time working in the backend. This was mainly because I spent a lot of time understanding the relationships(One-to-Many or Many -to- Many) and how to create these relationships within serializers.</p>

<h3>Known Bugs or errors:</h3>
<p>Users are unable to edit/ delete comments.</p>

<h3>Future features:</h3>
<p>Some added functionality I would have liked to add if I had more time:</p>
<li>Add a profile page </li>
<li>Search functionality with the ability to filter pictures by family </li>
<li>Users would like their favourite pictures.</li>
<li>Improve my comment design</li>
<li>Responsive design</li>

<h3>Key Learning:</h3>
<li>Python Fundamentals: As this was my first project using Python, I had the opportunity to solidify my understanding of it.</li>
<li>React Hooks: React Hooks introduced a new way of working. I enjoyed using it and will continue to use it in future projects.</li>







