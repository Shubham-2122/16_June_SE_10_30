#include<stdio.h>
#include<conio.h>

void main()
{
	char name[20];
	
	printf("Enter your Name :");
//	scanf("%s",&name);
	
	gets(name);
	
	printf("Your Name : %s",name);
	
	getch();
}
