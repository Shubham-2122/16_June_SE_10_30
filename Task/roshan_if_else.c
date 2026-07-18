#include<stdio.h>
#include<conio.h>

void main()
{
	int age;
	printf("Enter your age :");
	scanf("%d",&age);
	
	printf("Age is now:%d",age);
	if (age>=18){
	
	printf("\nAge is Allowed");
}
	else{
		printf("\nAge is not Allowed");
	}

	getch();
} 
