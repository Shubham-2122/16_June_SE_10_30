/*
		2) with parameter and with return
		
		int func-name(a,b){
			..code
			return ;
		}

*/
#include<stdio.h>
#include<conio.h>

int sum(int a,int b){
	int add;
	add = a+b;
	return add;
}

void main(){
	
	printf("sum : %d",sum(30,20));
	printf("\nsum : %d",sum(50,30));
		
	getch();
}
