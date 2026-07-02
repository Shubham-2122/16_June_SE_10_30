#include<stdio.h>
#include<conio.h>

struct student{
	int rollno;
	float marks;
	char name[20];
};

int main()
{
	struct student s;
	printf("Enter your rollno : ");
	scanf("%d",&s.rollno);
	printf("Enter your Name : ");
	scanf("%s",&s.name);
	printf("Enter your marks : ");
	scanf("%f",&s.marks);
	
	printf("\n----student details----");
	printf("\nroll no : %d",s.rollno);
	printf("\nname : %s",s.name);
	printf("\nMarks : %.2f",s.marks);
	return 0;
}
