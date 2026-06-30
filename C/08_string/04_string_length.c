#include<stdio.h>
#include<conio.h>
#include<string.h>

void main()
{
	char name[20];
	char demo[20];
	int len,cmp;
	
	printf("Enter your Name 1 :");
//	scanf("%s",&name);
	
	gets(name);
	
	printf("Your Name 1 : %s",name);
	
	len = strlen(name);
	printf("\nString length : %d",len);
	
	printf("\nEnter your Name 2 :");
	gets(demo);
	printf("Your Name 2 : %s",demo);
	
//	strcat(name,demo);
//	printf("\nString concat : %s",name);

	cmp = strcmp(name,demo);
	
	if(cmp == 0){
		printf("\nString match...");
	}
	else{
		printf("\nString does not Match..");
	}
	
	strupr(name);
	printf("\nName : %s",name);
	
	getch();
}
