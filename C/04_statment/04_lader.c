/*
	
	if(){
		..code
	}
	else if(){
		
	}
	else if(){
		
	}
	else{
	
	}

*/

#include<stdio.h>
#include<conio.h>

void main()
{
	
	int marks;
	printf("Enter your MArks : ");
	scanf("%d",&marks);
	
	printf("Marks : %d",marks);
	
	if(marks > 100 || marks < 0){
		printf("\nMarks are invalid");
	}
	else if(marks>=85 && marks<=100){
		printf("\nA grade Students");
	}
	else if(marks>=70 && marks<85){
		printf("\nB grade Students");
	}
	else if(marks<70 && marks>=55){
		printf("\nC grade Students");
	}
	else if(marks <55 && marks>=33){
		printf("\nD grade Students");
	}
	else{
		printf("\nFaild Students");
	}
		
	getch();
}
