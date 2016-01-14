#class
class is top level class
class can have more than one courses

title: STRING
instructor:{
  id:uid, STRING
  provider: STRING
}
createdAt: TIMESTAMP
updatedAt: TIMESTAMP
pubStatus: Boolean
coInstructor:[] //Edit Version
students:[]
courses:[]

##course
course includes chapters

title: STRING
parentClass
classId: ID
chapters:[]

####chapter
chapter consists of materials and challenges

title: STRING
materials:[]
challenges:[]

#####material
title:
description:
read:

#####challenge
title:
description:
answer:
hints:[]
