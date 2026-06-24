/*
	
	switch(choice){
		case 1:
			code;
			break;
		default:
			break;s
	}

*/

#include<stdio.h>
#include<conio.h>

void main(){
	
	int ch;
	
	printf("enter your choice : ");
	scanf("%d",&ch);
	
	switch(ch){
		case 1:
			printf("\nMonday");
			break;
		case 2:
			printf("\ntuesday");
			break;
		case 3:
			printf("\nwensday");
			break;
		case 4:
			printf("\nThrusday");
			break;
		default :
			printf("\nInvalid Choice ...");
	}
	
	getch();
}
