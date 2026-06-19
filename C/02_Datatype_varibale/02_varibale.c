
/*
	datatype varibale-name = value
	
*/

#include<stdio.h>
#include<conio.h>

void main(){
	
	
	//1 ) interger : 4 bytes
	int a = 15;
	
	printf("A : %d",a); /// int 
	printf("\nA : %i",a);
	
//	2) float : decimal : 8 bytes
	float b = 13.567;
	printf("\nB : %f",b);
	printf("\nB : %.2f",b);
	printf("\nB : %.1f",b);
	
	
//	3) charctor : 1bytes 

	char name = 'S'; // 1 bytes 
	printf("\nname : %c",name);


	
	getch();
}
