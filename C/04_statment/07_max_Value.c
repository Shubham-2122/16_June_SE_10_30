/*
	
	A,B,C

*/

#include<stdio.h>
#include<conio.h>

void main(){

	int a,b,c;
	
	printf("Enter your A : ");
	scanf("%d",&a);
	printf("Enter your B : ");
	scanf("%d",&b);
	printf("Enter your C : ");
	scanf("%d",&c);
	
	
	if(a>b && a>c){
		printf("A is max : %d",a);
	}
	else if(b>c){
		printf("B is max : %d",b);
	}
	else{
		printf("C is max : %d",c);
	}


	getch();
}
