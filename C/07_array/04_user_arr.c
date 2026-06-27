#include<stdio.h>
#include<conio.h>

void main()
{
	int a[5],i;
	
	for(i=0;i<5;i++){
		printf("Enter your Element : ");
		scanf("%d",&a[i]);
	}
	printf("\nStore Array data");
	
	for(i=0;i<5;i++){
		printf("\na[%d] : %d",i,a[i]);
	}
	
	getch();
}
