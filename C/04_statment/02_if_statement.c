/*

	if statenment : only true 
	
	if(codition){
		..code;
	}

*/
#include<stdio.h>
#include<conio.h>

void main()
{
	int age;
	printf("Enter your Age : ");
	scanf("%d",&age);
	
	printf("Age is now : %d",age);
	
	if(age >= 18){
		printf("\nAge is Allowed");
	}
	
	getch();
}

