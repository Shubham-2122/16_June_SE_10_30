/*
	5 = 5+4+3+2+1+0 = 15
	with parameyter and with return 
	5! = 5*4*3*2*1 = 120
	
	fabonaci : 0 1 1 2 3 5 9 14
*/
#include<stdio.h>
#include<conio.h>

int total(int n){
	int i,sum = 0;
	for(i=n;i>=0;i--){
		sum = sum + i;
	}
	return sum;
}


void main()
{
	int num ;
	printf("enter your number : ");
	scanf("%d",&num);
	
	printf("Nuber : %d",num);
	printf("\nTotal Sum : %d",total(num));
}
