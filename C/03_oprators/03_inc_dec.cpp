#include<stdio.h>
#include<conio.h>

void main()
{
	int a = 20;
	int b = 10; 
	int max,min;
	
	max = a > b; 
	
	printf("Max : %d",max);
	
	min = a < b;
	printf("\nMin : %d",min);
	
	int com;
	
	com = a == b;
	printf("\ncom : %d",com);
	
	int data;
	
	data = a != b;
	printf("\nData : %d",data);
	
	getch();
}
